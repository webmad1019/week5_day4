# week5_day4

> Express | File upload
>
> Express | CDN file upload


## Main points: file upload (local)

- Los formularios con controles de tipo `file` requeren el atributo `enctype="multipart/form-data"` para procesar el envío de archivos.

- La dependencia `multer` crea en el objeto `request` la propiedad `file` donde guarda los detalles de la subida tras actuar como middleware.

- Las propiedades del objeto req.file son:

  * fieldname
  * originalname
  * encoding
  * mimetype
  * size
  * destination
  * filename
  * path
  * buffer


## Main points: file upload (CDN)

- Las dependencias `cloudinary`, `multer-storage-cloudinary` y `multer` pueden combinarse para conectar Express al CDN Cloudinary.

## Main points: custom snippets

````json
{
	"Bootstrap Navbar": {
		"scope": "html, handlebars",
		"prefix": "bsnav",
		"body": [
			"<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>",
			"\t<a class='navbar-brand' href='#'>$1</a>",
			"\t<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>",
			"\t\t<span class='navbar-toggler-icon'></span>",
			"\t</button>",
			"\t<div class='collapse navbar-collapse' id='navbarSupportedContent'>",
			"\t\t<ul class='navbar-nav ml-auto'>",
			"\t\t\t<li class='nav-item'>",
			"\t\t\t\t<a class='nav-link' href='$2'>$3</a>",
			"\t\t\t</li>",
			"\t\t</ul>",
			"\t</div>",
			"</nav>",
		],
		"description": "Barra de navegación de BS"
	}
}
````



````json
{
	"Bootstrap form": {
		"scope": "html, handlebars",
		"prefix": "bsform",
		"body": [
			"<form>",
			"\t<div class='form-group'>",
			"\t\t<label for='$1'>$2</label>",
			"\t\t<input name='$3' type='$4' class='form-control' placeholder='$5' id='$1'>",
			"\t\t<small class='form-text text-muted'>$6</small>",
			"\t</div>",
			"\t<button type='submit' class='btn btn-dark'>$7</button>",
			"</form>"
		],
		"description": "Bootstrap form with 1 field"
	}
}
````


