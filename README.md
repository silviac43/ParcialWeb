# ParcialWeb - Silvia Cárdenas 2210102

Para ejecutar el parcial se debe abrir la carpeta en el editor de su preferencia y en la terminal utilizar el siguiente comando, para crear un ambiente virtual:
   python -m venv <virtual-environment-name>

 Posteriormente se debe pasar el siguiente comando a consola para activar el ambiente:
   /<virtual-environment-name>/Scripts/activate.bat
  
 Luego installar Django y Psycopg2:
   pip  install django
   pip install psycopg2
  
 Luego ubicarnos en el directorio del projecto parcial con el comando:
   cd parcial
  
 Y finalmente correr el servidor con:
   Python manage.py runserver
  
 Al ejecutar este comando el servidor estara corriendo en la  siguiente url:
   http://127.0.0.1:8000/
