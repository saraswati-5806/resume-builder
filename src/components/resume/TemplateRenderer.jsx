import React from 'react';

import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3';
import Template4 from '../templates/Template4';
import Template5 from '../templates/Template5';
import Template6 from '../templates/Template6';
import Template7 from '../templates/Template7';
import Template8 from '../templates/Template8';
import Template9 from '../templates/Template9';
import Template10 from '../templates/Template10';
import Template11 from '../templates/Template11';
import Template12 from '../templates/Template12';

export default function TemplateRenderer(props) {
  switch (props.selectedTemplateId) {

    case 'olivia-sanchez':
      return <Template1 {...props} />;

    case 'lorna-alvarado':
      return <Template2 {...props} />;

    case 'catrine-ziv':
      return <Template3 {...props} />;

    case 'samira-hadid':
      return <Template4 {...props} />;

    case 'rosa-maria-aguado':
      return <Template5 {...props} />;

    case 'richard-sanchez':
      return <Template6 {...props} />;

    case 'sebastian-bennett':
      return <Template7 {...props} />;

    case 'olivia-wilson':
      return <Template8 {...props} />;

    case 'mariana-anderson':
      return <Template9 {...props} />;

    case 'olivia-sanchez-circle':
      return <Template10 {...props} />;

    case 'olivia-sanchez-blue':
      return <Template11 {...props} />;

    case 'sebastian-bennett-black': 
      return <Template12 {...props} />;

    default:
      return <Template1 {...props} />;
  }
}