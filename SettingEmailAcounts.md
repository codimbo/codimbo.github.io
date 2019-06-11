#Configurando Cuentas de Correo

##Agregando una cuenta de correo para un New Staff (Solo para el administror de AWS)

1. Entrar en la consola de amazon de la cuenta de codimbo (https://console.aws.amazon.com/)
2. Asegurarse que en el menú de la parte superior derecha este seleccionada la región **US West (Oregon)**. Ya que en esta región se hizo toda la configuración del servicio de correos.
3. Ya estando en la consola, nos digimos al servicio **Lambda** que se encuentra en la categoría **Compute**.
4. Se podrá visualizar una función con el nombre de **aws-lambda-ses-forwarder**. Dar click sobre el nombre para visualizar la configuración.
5. Se mostrará la sección **Function code** que es donde está el código javascript que se encarga de direccionar los emails entrante. Dentro del código buscamos la siguientes sección:

```
var defaultConfig = {
  fromEmail: "info@codimbo.com",
  subjectPrefix: "",
  emailBucket: "codimbo-mailbox",
  emailKeyPrefix: "",
  forwardMapping: {
    ...
  }
};
```

6. En ese sección de código es donde se agrega el nuevo correo con el correspondiente **gmail** del **New Staff**. Esto sería de la siguiente manera en *forwardMapping*:

```
forwardMapping: {
    ...,
    "new_staff@codimbo.com": [
      "new_staff@gmail.com"
    ]
}
```

7. Se salvan los cambios al dar click en el botón **save** que se encuentra en la parte superior.

> **NOTA:** Si se desea que los correos que llegan a *info@codimbo.com* sean recibidos por mas personar, puede agregar los nuevos email al array de *info@codimbo.com*:
```
"info@codimbo.com": [
  ...,
  "new1@gmail.com",
  "new2@gmail.com",
  ...
]
```

8. Ir al servicio **Simple Email Service** que se encuentra en la categoría **Application Integration**.
9. Seleccionar del menú la opción **Email Addresses**.
10. Dar click en el botón **Verify a New Email Address** para agregar y verificar el correo del *new staff*, por ejemplo: *new_staff@gmail.com*. Sin este paso, no le llegaran los correos al *new staff*.
11. Al *new staff* le llegará un correo para verificar su cuenta y debe dar click al enlace que le aparece en el correo.

##Creación de las credenciales de correo para el New Staff (Solo para el administror de AWS)

1. Ir al servicio **Simple Email Service** que se encuentra en la categoría **Application Integration**.
2. Seleccionar la opción **SMTP Settings**.
3. Dar click al botón **Create My SMTP Credentials**.
4. Introducir un nombre en **IAM User Name** y dar click en el botón **Create**.
5. Podrás visualizar y descargar las nuevas credenciales para configurar la conexión de la nueva cuenta de correo con **gmail**.

##Configurar Gmail para porder enviar correos a través del **Simple Email Service** (Esto es para el New Staff)

1. En gmail ir a **Configuración**.
2. Ir a la opción **Cuentas e importación**.
3. Seleccionar la opción **Añadir otra dirección de correo electrónico**.
4. Se despliega un modal donde se coloca la cuenta de correo asignada por **Codimbo**, se debe destildar el checkbox **Tratarlo como un alias** y dar **Siguiente paso**.
5. Introduccir el servidor **email-smtp.us-west-2.amazonaws.com**, el puerto **587**, la opción **Conexión segura mediante TLS (recomendada)** destildada, las credenciales que fueron proporcionadas por **Codimbo** y dar click a **Añadir Cuenta**.
6. Si las credenciales y el servidor SMTP han sido instroduccidos correctamente, debe llegar un correo a la cuenta gmail con un código de verificación. Introducelo y ya estaría tu cuenta configurada para enviar emails a traver de tu cuenta de **Codimbo**.