// Mock data for the AWS Cloud Consulting homepage

export const services = [
  {
    id: 'architecture',
    title: 'AWS Architecture',
    description: 'Wir entwerfen skalierbare und sichere Cloud-Architekturen, die perfekt auf Ihre Geschäftsanforderungen zugeschnitten sind.',
    icon: 'layout'
  },
  {
    id: 'development',
    title: 'AWS Development',
    description: 'Entwicklung moderner Cloud-native Anwendungen mit AWS Services für maximale Performance und Zuverlässigkeit.',
    icon: 'code'
  },
  {
    id: 'ai',
    title: 'AWS AI',
    description: 'Implementierung intelligenter KI-Lösungen mit AWS AI/ML Services zur Automatisierung und Optimierung Ihrer Prozesse.',
    icon: 'brain'
  }
];

export const mockContactSubmit = (formData) => {
  // Mock function for contact form submission
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock contact form submission:', formData);
      resolve({ success: true, message: 'Nachricht wurde erfolgreich gesendet!' });
    }, 1000);
  });
};
