import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Impressum = () => {
  return (
    <div className="impressum-page">
      <div className="impressum-container">
        <Card className="impressum-card">
          <CardHeader>
            <CardTitle className="impressum-title">Impressum</CardTitle>
          </CardHeader>
          <CardContent className="impressum-content">
            <div className="impressum-section">
              <h3>Angaben gemäß § 5 TMG</h3>
              <p>[Firmenname]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ und Ort]</p>
            </div>

            <div className="impressum-section">
              <h3>Vertreten durch</h3>
              <p>[Name des Vertretungsberechtigten]</p>
            </div>

            <div className="impressum-section">
              <h3>Kontakt</h3>
              <p>E-Mail: ekki01@t-online.de</p>
              <p>Telefon: [Telefonnummer]</p>
            </div>

            <div className="impressum-section">
              <h3>Umsatzsteuer-ID</h3>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>[USt-IdNr.]</p>
            </div>

            <div className="impressum-section">
              <h3>Haftungsausschluss</h3>
              <h4>Haftung für Inhalte</h4>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              
              <h4>Haftung für Links</h4>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </div>

            <div className="impressum-section">
              <h3>Datenschutz</h3>
              <p>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf 
                freiwilliger Basis.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Impressum;
