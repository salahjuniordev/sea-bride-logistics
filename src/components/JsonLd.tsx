import { Helmet } from 'react-helmet-async';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sea Bridge Logistics',
  description: 'Freight forwarding and logistics services across Cameroon and Central Africa. Air, sea, road freight, warehousing, customs clearance, and supply chain management.',
  url: 'https://seabridgelogistics.com',
  telephone: '+237 6XX XXX XXX',
  email: 'info@seabridgelogistics.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bonanjo, Rue de la Joie',
    addressLocality: 'Douala',
    addressRegion: 'Littoral',
    addressCountry: 'CM',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 4.0511,
    longitude: 9.7679,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 4.0511, longitude: 9.7679 },
    geoRadius: '500 km',
  },
  serviceType: [
    'Air Freight',
    'Sea Freight',
    'Road Freight',
    'Warehousing',
    'Customs Clearance',
    'Supply Chain Management',
  ],
};

const JsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
  </Helmet>
);

export default JsonLd;
