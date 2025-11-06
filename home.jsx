import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { Layout, Code, Brain, Send } from 'lucide-react';
import { services, mockContactSubmit } from '../mock';

const iconMap = {
  layout: Layout,
  code: Code,
  brain: Brain
};

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Fehler',
        description: 'Bitte füllen Sie alle Felder aus.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await mockContactSubmit(formData);
      toast({
        title: 'Erfolg!',
        description: result.message
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Fehler',
        description: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceClick = (serviceId) => {
    toast({
      title: 'Information',
      description: `Detailseite für ${serviceId} kommt bald.`
    });
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Professionelle AWS Cloud Consulting Dienstleistungen
          </h1>
          <p className="hero-description">
            Wir helfen Ihnen, die Kraft der AWS Cloud zu nutzen und Ihre digitale Transformation erfolgreich umzusetzen.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="section-title">Unsere Leistungen</h2>
          <div className="services-grid">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card 
                  key={service.id} 
                  className="service-card"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardHeader>
                    <div className="service-icon">
                      <IconComponent size={40} />
                    </div>
                    <CardTitle className="service-title">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="service-description">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Kontaktieren Sie uns</h2>
          <p className="contact-subtitle">
            Haben Sie Fragen oder möchten Sie mehr über unsere Services erfahren? Schreiben Sie uns!
          </p>
          
          <Card className="contact-card">
            <CardContent className="contact-card-content">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ihr vollständiger Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="email">E-Mail-Adresse *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ihre.email@beispiel.de"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Wird gesendet...'
                  ) : (
                    <>
                      <Send size={18} />
                      Nachricht senden
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
