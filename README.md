# Clases Golf Valderrey

Registro de clases, bonos y cobros de Javier Santos (Club de Golf Valderrey, Zamora). Los datos se guardan **solo en el móvil de Javier**, sin cuentas ni servidor. La app funciona sin cobertura.

## 1. Publicarla en GitHub Pages (una vez, unos 5 minutos)

1. Crea una cuenta gratuita en github.com si no tienes.
2. Crea un repositorio nuevo, por ejemplo `golf-valderrey`. Márcalo como **Public**, porque Pages gratis lo exige. El repositorio solo contiene la página: los datos de los alumnos nunca se suben ahí.
3. Pulsa **Add file → Upload files** y sube los 7 archivos de esta carpeta tal cual: `index.html`, `sw.js`, `manifest.webmanifest`, los tres `.png` y este README.
4. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y pulsa Save.
5. En 1 o 2 minutos aparece la dirección: `https://TU-USUARIO.github.io/golf-valderrey/`.

## 2. Instalarla en el móvil de Javier

Abre la dirección **en el móvil de Javier**:

- **iPhone (Safari):** botón Compartir → **Añadir a pantalla de inicio**.
- **Android (Chrome):** menú ⋮ → **Instalar aplicación** o **Añadir a pantalla de inicio**.

A partir de ahí, Javier entra **siempre desde ese icono**. En iPhone esto importa de verdad: si la usa como página normal de Safari, el sistema puede borrar los datos tras varios días sin abrirla. Instalada en la pantalla de inicio, no los borra.

## 3. Primer día: cargar los alumnos con su bono actual

Pulsa **+ Alumno** y pega la lista entera, un alumno por línea:

```
Lucía Martín Prieto ; 12 ; 7
Andrés Gallego Rubio ; 5 ; 2
Marta Fernández
```

El formato es `nombre ; tamaño del bono ; clases que le quedan`. A quien no tiene bono, se le pone solo el nombre. Si la lista está en Excel, copia las tres columnas y pégalas tal cual. Esos bonos se dan por cobrados; si alguno está pendiente, se marca después en la ficha del alumno.

Un alumno suelto con el bono empezado se da de alta en su ficha → **+ Bono que ya tenía empezado**.

## 3 bis. Importar la lista desde un archivo

En vez de pegar a mano: **Alumnos → Importar lista** (o *+ Alumno → Importar muchos alumnos desde un archivo*).

- En el ordenador se puede **arrastrar** el archivo; en el móvil, **tocar para elegirlo** (Archivos, iCloud, correo…).
- Lee **Excel (.xlsx, .xls)**, **LibreOffice (.ods)** y **CSV**. No lee PDF ni Word: ábrelos y guárdalos como Excel o CSV.
- Reconoce solo las columnas *Nombre, Apellidos, Teléfono, Bono, Le quedan, Pagado*, aunque se llamen algo distinto ("Clases restantes", "Móvil", "Tipo de bono"…). Si se equivoca, se corrige en la vista previa con los desplegables.
- **Vista previa antes de guardar:** cuántos son nuevos, cuántos ya existían (no se tocan) y cuáles hay que revisar (entran sin bono).
- La primera vez que se lee un Excel hace falta internet. Los CSV funcionan siempre.
- Lo más cómodo es rellenar `plantilla-alumnos.xlsx`, que ya trae las columnas buenas.
- **Importa en el móvil de Javier.** Los alumnos se quedan en el aparato donde se importan. Si lo haces en el ordenador, haz después una copia de seguridad y restáurala en su móvil.

## 4. Agenda

La app abre en la pestaña **Agenda**: arriba la semana, debajo las horas del día elegido (de 8:00 a 21:00, cada clase dura 1 hora).

- **Agendar:** toca una hora **+ Libre** → escribe el nombre y toca al alumno (hasta 4 en la misma clase) → **Guardar clase**. También desde la ficha del alumno: **+ Agendar clase**.
- **Agendar no cobra nada.** La clase solo se descuenta del bono cuando la marcas.
- **Al terminar la clase:**
  - Vinieron todos → **Dada**. Se descuenta una clase del bono de cada uno.
  - No vino (clase individual) → **No vino**. No se cobra y no gasta pelota.
  - En grupo faltó alguien → toca la clase, marca **✗ No vino** a quien faltó y pulsa **Marcar como dada**. Solo se descuenta a los que vinieron.
- **Clases pasadas sin marcar** salen en ámbar, con un aviso arriba y un punto en el día de la semana. Que no se acumulen: una clase sin marcar no está ni cobrada ni descontada.
- Si te equivocas: toca la clase → **Me equivoqué** y vuelve a pendiente, devolviendo las clases.
- **Repetir:** al agendar, elige *Cada semana, 4 / 8 / 12 semanas*. Las semanas en que esa hora ya está ocupada se saltan y el aviso dice cuáles.
- Para cambiar el horario de trabajo, edita en `index.html` la línea `const HORA_INI=8, HORA_FIN=21;`.

## 5. Uso diario sin agenda

- **Clase individual:** busca el nombre y pulsa **+1**. Se descuenta de su bono. Si te equivocas, pulsa *Deshacer* (6 segundos).
- **Clase en grupo (2 a 4 alumnos):** pulsa **Clase en grupo**, marca a los alumnos y pulsa **Anotar a N**. Cada uno gasta una clase de su propio bono. En su historial queda con quién la compartió.
- **Faltas:** no se anotan. Si no viene, no se toca nada.
- **Alumno nuevo:** **+ Alumno** → nombre → teléfono (opcional) → ¿qué compra? (Bono 5, Bono 12, Clase suelta o Nada todavía) → ¿lo ha pagado? (Pagado o Pendiente) → **Guardar alumno**. Vuelve a la lista con el alumno resaltado.
- **Teléfono:** se ve en la ficha del alumno, debajo del nombre. Se corrige en *Datos del alumno*.
- **Vender bono o clase suelta a un alumno que ya existe:** toca su nombre → elige qué compra y si lo ha pagado → **Guardar bono**.
- **Alumno sin clases:** su botón pasa a dorado, **+1 €**. Al pulsarlo sale el mismo formulario; **Guardar y anotar clase** registra la compra y la clase a la vez. También puedes anotar sin comprar nada y queda a deber.
- **Cobrar un pendiente:** en la ficha, botón **Marcar cobrado** junto al bono.
- Las clases gastan los bonos en orden de compra. Si un alumno da clases sin bono, aparece **"Debe N"**, y esas clases se descuentan del siguiente bono que compre.
- **Por renovar / Por cobrar:** los contadores de arriba. Tócalos para ver solo esos alumnos.
- **Fecha distinta de hoy:** cambia la fecha en *Anotar en* antes de anotar. Sirve para apuntar clases atrasadas o vender un bono con otra fecha.

## 6. Copias de seguridad (obligatorio)

Los datos viven en un único móvil. Si se pierde, se rompe o se borran los datos del navegador, **todo desaparece salvo la última copia**.

- Pulsa **Copia de seguridad** al menos una vez por semana. La app avisa a los 7 días.
- Descarga un archivo `.json`. Guárdalo en Google Drive o iCloud, o envíatelo por correo.
- Con un móvil nuevo, instala la app y pulsa **Restaurar copia** con ese archivo.
- **Exportar a Excel (CSV)** sirve para revisar o cobrar desde el ordenador. No sirve para restaurar.

## Cambiar el aspecto o los bonos

- Los tamaños de bono están en `index.html`, en la línea `const BONOS = [5, 12];`.
- Si modificas cualquier archivo, sube la versión en `sw.js` (`golf-valderrey-v1` → `v2`) para que los móviles reciban el cambio.
- Cambiar archivos del repositorio **no toca los datos** que ya hay en el móvil.
