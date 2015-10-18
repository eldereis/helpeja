define([
  'app'
], function (app) {
  'use strict';

  app.service('dataService', [
    function () {
      this.events = [{
        id: 1,
        name: 'Assistência técnica de eletrônicos',
        city: 'Wilson Junior',
        district: 'Rio de Janeiro/Gávea',
        street: 'Desenvolvimento de projetos de equipamentos eletrônicos. Manutenção de equipamentos eletrônicos residenciais, comerciais e industriais. Instalação elétrica residencial, comercial e industrial. Manutenção em instalações elétricas.',
        number: '',
        zip: '',
        lat: 51.090209,
        lng: 6.585863,
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 2,
        name: 'Pedreiro',
        city: 'Maurilio',
        district: 'Rio de Janeiro/Botafogo',
        street: '50 anos de profissão como pedreiro, encanador, eletricista, etc..',
        number: '',
        zip: '',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.163893,
        lng: 10.986114,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 3,
        name: 'Instalação e manutenção de ar-condicionado',
        city: 'Jean Ramos',
        district: 'Rio de Janeiro/Vidigal',
        street: 'Especializado em manutenção de ar-condicionado',
        number: '',
        zip: '',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.114004,
        lng: 10.933228,
        wheelchair: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 4,
        name: 'Pintor',
        city: 'Roberto Pinturas',
        district: 'Rio de Janeiro/Urca',
        street: 'Excelente qualidade, responsável e compromisso com o trabalho',
        number: '',
        zip: '',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 5,
        name: 'Personal Trainer',
        city: 'Marina Dantas',
        district: 'Rio de Janeiro/Urca',
        street: 'Atendimento especializado de Personal Trainer englobando treinamento funcional, pilates, musculação e outros. Nutrição e suplementação, cardápio alimentar. Atendimento On line e presencial.',
        number: '',
        zip: '',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: 48.302842,
        lng: 11.352900,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      },];

      this.pages = [{
        alias: 'impress',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Inicio',
        icon: 'ion-information-circled'
      }, {
        alias: 'contact',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Contato',
        icon: 'ion-paper-airplane'
      }];
    }
  ]);
});
