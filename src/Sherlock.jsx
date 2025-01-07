import { useState, useRef } from 'react';
import { Alert, Card, Stack, Divider, CardContent, CardActions, CardMedia, Link, Typography, TextField, Button } from '@mui/material';


function Sherlock() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);

  const solution1Ref = useRef("")
  const solution21Ref = useRef("")
  const solution22Ref = useRef("")

  function handleSolution1Click() {
    if (solution1Ref.current.value === "EdelgaseFluorverringertsich") {
      setVisible1(true);
    } else {
      setError1(true);
    }
  }

  function handleSolution2Click() {
    if (solution21Ref.current.value === "Gabi" && solution22Ref.current.value === "Felice") {
      setVisible2(true);
    } else {
      setError2(true);
    }
  }
  function handleSolution3Click() {
    setVisible3(true);
    setError3(true);
  }

  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h2" align="center" gutterBottom>
          Willkommen zurück, Sherlock!
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Der nächste Fall wartet auf dich.
            </Typography>
            <Typography variant="body1" gutterBottom paragraph>
              Doch zunächst solltest du dich auf den Fall vorbereiten: 
            </Typography>
            <Link variant="body1" target="blank" href="https://de.serlo.org/chemie/155875/aufgaben-zum-periodensystem#">
              Hier gehts zur Vorbereitungsaufgabe... 
            </Link>
          </CardContent>
          <Divider variant="middle" />
          <CardContent>
            <Typography variant="body2">
              Hinweis: Reihe die 3 Antworten aneinander und entferne alle Leerzeichen. 
            </Typography>
          </CardContent>
          <CardActions>
            <TextField label="Lösungswort" variant="outlined" size="small" inputRef={solution1Ref} fullWidth required onClick={() => setError1(false)} />
            <Button onClick={handleSolution1Click}>Überprüfen</Button>
          </CardActions>
          { error1 && <Alert severity="error">Das ist falsch. Du must dich noch besser vorbereiten.</Alert> }
          </Card>

          { visible1 && 

          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Wer hat den Wissenschaftler umgebracht?
              </Typography>
              <CardMedia
                component="img"
                height="240"
                image="assets/bild1.jpg"
                alt="" />
              <Typography variant="body1" gutterBottom paragraph>
                Es ist ein Mord passiert. 
                Ein berühmter Wissenschaftler ist in seinem Labor umgebracht worden. 
                Bevor er starb, konnte der Forscher noch einen Hinweis auf seiner Tafel notieren: 3183/26358 steht dort geschrieben. 
                Dringend tatverdächtig sind einige Kollegen. 
                Nach ersten Ermittlungen haben Edward, Manuel, Gabi, Carl, Sahra, Irene, Felice und Antonio kein Alibi.
              </Typography>
            </CardContent>
            <Divider variant="middle" />
          <CardContent>
            <Typography variant="body2">
              Hinweis: Wir gehen von 2 Tätern aus. Suche in unserer Datenbank nach weiteren Hinweisen zu den beiden Tatverdächtigen.
            </Typography>
          </CardContent>
          <CardActions>
            <TextField label="Tatverdächtige 1" variant="outlined" size="small" inputRef={solution21Ref} required onClick={() => setError2(false)} />
            <TextField label="Tatverdächtige 2" variant="outlined" size="small" inputRef={solution22Ref} required onClick={() => setError2(false)} />
            <Button onClick={handleSolution2Click}>Suchen</Button>
          </CardActions>
          { error2 && <Alert severity="error">Da ist etwas falsch. Es wurden keine Datenbankeinträge gefunden.</Alert> }
        </Card>

        }{ visible2 && 

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Secret Important National Great Society Database
            </Typography>
            <Typography variant="body1" gutterBottom paragraph>
              Die beiden Tatverdächtigen werden mit 3 Informanten in Kontakt gebracht. 
              Befrage die Informanten, um mehr über die Tatverdächtigen zu erfahren.
              Sei dabei so diskret wie möglich.
            </Typography>
          </CardContent>
          <Divider variant="middle" />
          <CardActions>
            <Button onClick={handleSolution3Click}>Kontaktdaten anzeigen</Button>
          </CardActions>
          { error3 && 
            <>
              <Alert severity="warning">Corresponding Join Not Defined</Alert>
              <Divider />
              <Alert severity="warning">Database debug</Alert>
              <Divider />
              <Alert severity="warning">Interpreting debugdbquery output</Alert>
              <Divider />
              <Alert severity="error">ODBC error when running Crystal Reports</Alert>
              <Divider />
              <Alert severity="warning">Corresponding Join Not Defined</Alert>
              <Divider />
              <Alert severity="warning">Database debug</Alert>
              <Divider />
              <Alert severity="warning">Interpreting debugdbquery output</Alert>
              <Divider />
              <Alert severity="error">ODBC error when running Crystal Reports</Alert>
              <Divider />
              <Alert severity="warning">Corresponding Join Not Defined</Alert>
              <Divider />
              <Alert severity="warning">Database debug</Alert>
              <Divider />
              <Alert severity="warning">Interpreting debugdbquery output</Alert>
              <Divider />
              <Alert severity="error">ODBC error when running Crystal Reports</Alert>
            </>
          }
        </Card>

        }{ visible3 && 

        <Card>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Fatal Error
            </Typography>
            <Typography variant="body1" gutterBottom paragraph>
                Die Datenbankeinträge sind fehlerhaft und konnten nicht korrekt ausgelesen werden:
            </Typography>
            <CardMedia
                component="img"
                height="120"
                image="assets/bild2.jpg"
                alt="" />
          </CardContent>
          <CardContent>
            <Typography variant="body2">
              Hinweis: Die Kontaktdaten der 3 Informanten sind durcheinandergeraten. 
              Finde die korrekten Natelnummern anhand den Kontakten auf deinem Natel. 
              Kontaktiere die Informanten per WhatsApp und befrage sie zu den Tatverdächtigen. 
            </Typography>
          </CardContent>
        </Card>
        
        }
      </Stack>
    </>
  )
}

export default Sherlock
