from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import spacy
import warnings
from flask import Flask, jsonify
import fitz  # PyMuPDF
from flask_cors import CORS
warnings.filterwarnings("ignore", message="Error loading saved torch state_dict", category=UserWarning)

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({'message': 'File uploaded successfully'})


cors = CORS(app, origins='*')

def list_files_in_directory(directory_path):
    try:
        entries = os.listdir(directory_path)
        files = [entry for entry in entries if os.path.isfile(os.path.join(directory_path, entry))]
        return files
    except FileNotFoundError:
        return f"The directory {directory_path} does not exist."
    except Exception as e:
        return str(e)

directory_path = 'uploads'
file_list = list_files_in_directory(directory_path)

# Ensure file_list is a list of strings
if isinstance(file_list, list):
    if len(file_list) > 0 and isinstance(file_list[0], str):
        print(file_list[0])
    else:
        print("file_list does not contain valid filenames.")
else:
    print("Error: ", file_list)  # Print error message if file_list is not a list

@app.route('/', methods=['GET'])
def home():
    try:
        nlp = spacy.load('Model/output/model-best')
        
        # Ensure file_list is a list of strings before accessing it
        if isinstance(file_list, list) and len(file_list) > 0 and isinstance(file_list[0], str):
            fname = f'uploads/{file_list[0]}' 
            print(fname)
            doc = fitz.open(fname)
            text = ""
            for page in doc:
                text += page.get_text()

            doc = nlp(text)

            data = []
            for ent in doc.ents:
                print(ent.text, "------>", ent.label_)
                data.append({"text": ent.text, "label": ent.label_})

            return jsonify(data)

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True,port=8080)



