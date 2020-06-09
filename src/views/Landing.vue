<template>
  <div class="landing">
    <Header class="header" @show="showModal" @showMap="showModalMap"
      :phones="[
        {
          link: 'tel:88001002024',
          tel: '8 800 100 20 24'
        },
        {
          link: 'tel:79261895027',
          tel: '+ 7 (926) 189-50-27'
        }
      ]"
      :defaultClub="'Солнцево-Парк'"
      :clubs="[
        {
          club: '«Алексеевский»',
          english: true
        },
        {
          club: '«Матвеевский»',
          english: false
        },
        {
          club: '«Мичуринский»',
          english: false
        },
        {
          club: '«Солнцево-Парк»',
          english: true
        },
        {
          club: '«Тёплый Стан»',
          english: false
        },
        {
          club: 'Бунинские луга',
          english: false
        },
        {
          club: 'Бутово парк',
          english: false
        },
        {
          club: 'в Бескудниково',
          english: false
        },
        {
          club: 'в Бутово',
          english: true
        },
        {
          club: 'в Жулебино',
          english: false
        },
        {
          club: 'в Измайлово',
          english: false
        },
        {
          club: 'в Кожухово',
          english: false
        },
        {
          club: 'в Коммунарке',
          english: false
        },
        {
          club: 'в Крылатском',
          english: true
        },
        {
          club: 'в Куркино',
          english: false
        },
        {
          club: 'в Марфино',
          english: true
        },
        {
          club: 'в Медведково',
          english: false
        },
        {
          club: 'в Митино',
          english: false
        },
      ]"
      :defaultCity="'Санкт-Петербург'"
      :popular_cities="['Москва', 'Самара', 'Санкт-Петербург']"
      :cities='[
        { 
          letter: "А", 
          name: [ "Актау", "Альметьевск", "Атырау"] 
        },
        { 
          letter: "В", 
          name: [ "Видное", "Владивосток", "Владикавказ", "Воронеж", "Воскресенск", "Всеволожск",] 
        },
        { 
          letter: "Г", 
          name: [ "Гатчина"] 
        },
        { 
          letter: "Д", 
          name: [ "Дзержинск", "Долгопрудный"] 
        },
        { 
          letter: "Е", 
          name: [ "Екатеринбург"] 
        },
        { 
          letter: "З", 
          name: [ "Зеленоград"] 
        },
        { 
          letter: "И", 
          name: [ "Ивантеевка", "Ижевск", "Истра"] 
        },
        { 
          letter: "Й", 
          name: [ "Йошкар-Ола"] 
        },
        { 
          letter: "К", 
          name: [ "Казань", "Королев", "Красногорск", "Краснодар"] 
        },
        { 
          letter: "Л", 
          name: [ "Лобня"] 
        },
        { 
          letter: "М", 
          name: [ "Магнитогорск", "Москва", "Мурино", "Мурманск", "Мытищи"] 
        },
        { 
          letter: "Н", 
          name: [ "Набережные Челны", "Нефтекамск", "Нижний Новгород", "Нижнекамск", "Новосибирск", "Ногинск", "Ноябрьск", "Нур-Султан"] 
        },
        { 
          letter: "О", 
          name: [ "Одинцово", "Омск"] 
        },
        { 
          letter: "П", 
          name: [ "Прага", "Путилково", "Пушкино"] 
        },
        {
          letter: "Р", 
          name: [ "Ростов-на-Дону"] 
        },
        { 
          letter: "С", 
          name: [ "Самара", "Сан��т-Петербург", "Северск", "Снегири", "Сургут"] 
        },
        { 
          letter: "Т", 
          name: [ "Тамбов", "Тольятти", "Томск", "Тула"] 
        },
        { 
          letter: "У", 
          name: [ "Ульяновск", "Уральск", "Уфа"] 
        },
        { 
          letter: "Х", 
          name: [ "Хабаровск", "Химки"] 
        },
        { 
          letter: "Ч", 
          name: [ "Челябинск"] 
        },
        { 
          letter: "Ш", 
          name: [ "Шымкент"] 
        },
        { 
          letter: "Щ", 
          name: [ "Щелково"] 
        },
        { 
          letter: "Ю", 
          name: [ "Южно-Сахалинск"] 
        },
        { 
          letter: "Я", 
          name: [ "Ярославль"] 
        }
      ]'
    />
    <div class="padding"></div>
    <FirstBlock @adopted="confirmModal" id="about_club"
      :offerText="'Запишитесь на пробное занятие <span style=' + 'color:#4C85F7' + '>прямо сейчас</span>'"
    />
    <SecondBlock 
      :content="[
        {
          text: 'Уверенность в себе, принятие ответственности',
          img: require('@/assets/img/advantages-img1.svg')
        },
        {
          text: 'Интерес к получению новых знаний, внутренняя мотивация',
          img: require('@/assets/img/advantages-img2.svg')
        },
        {
          text: 'Социализация, открытое общение со сверстниками и взрослыми',
          img: require('@/assets/img/advantages-img3.svg')
        },
        {
          text: 'Развитие талантов, подготовка к саду или школе',
          img: require('@/assets/img/advantages-img4.svg')
        }
      ]"
      :link="'https://www.youtube.com/embed/3QFk7FdWRIg?start=5'"
    />
    <Why/>
    <Kindergarten
      :photos="[
        require('@/assets/img/kinder1.svg'),
        require('@/assets/img/kinder2.svg'),
        require('@/assets/img/kinder3.svg')
      ]"
    />
    <Programs @adopted="programModal" @confirm="confirmModal" @showAllTimetable="showAllTimetable" @close="closeModal" id="programs"
      :offerSubtitle="'Ваш ребенок в надежных руках'"
      :offerTitle="'Запишитесь на пробное занятие'"
      :babies="[
        {
          title: 'БЭБИК 1',
          age: '8 мес - 1.5 года',
          description: 'Малыши учатся общаться с другими детьми, узнают новые слова, предметы и явления окружающего мира. Большой акцент делается на развитие речевого центра ренбенка.',
          price: '3 900',
          photo: require('@/assets/img/baby-icon.svg')
        },
        {
          title: 'БЭБИК 2',
          age: '8 мес - 1.5 года',
          description: 'Малыши учатся общаться с другими детьми, узнают новые слова, предметы и явления окружающего мира. Большой акцент делается на развитие речевого центра ренбенка.',
          price: '3 400',
          photo: require('@/assets/img/baby-icon.svg')
        },
        {
          title: 'БЭБИК 3',
          age: '8 мес - 1.5 года',
          description: 'Малыши учатся общаться с другими детьми, узнают новые слова, предметы и явления окружающего мира. Большой акцент делается на развитие речевого центра ренбенка.',
          price: '3 800',
          photo: require('@/assets/img/baby-icon.svg')
        },
        {
          title: 'БЭБИК 4',
          age: '8 мес - 1.5 года',
          description: 'Малыши учатся общаться с другими детьми, узнают новые слова, предметы и явления окружающего мира. Большой акцент делается на развитие речевого центра ренбенка.',
          price: '4 900',
          photo: require('@/assets/img/baby-icon.svg')
        }
      ]"
      :monday="[
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        }
      ]"
      :tuesday="[
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        }
      ]"
      :wednesday="[
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        }
      ]"
      :thursday="[
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        }
      ]"
      :friday="[
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        }
      ]"
      :saturday="[
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        }
      ]"
      :sunday="[
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        },
        {
          time: '09:30 - 10:30',
          group: 'Группа 1',
          name: 'БЭБИК 1',
          timeEng: '09:00 - 10:00',
          groupEng: 'Группа 2',
          nameEng: 'БЭБИК 1'
        }
      ]"
    />
    <Staff id="staff"
      :persons="[
        {
          name: 'Максимова Елизавета1',
          profession: 'Специалист развивающих занятий',
          aboutSubtitle: 'Ведет программы:',
          aboutTitle: ['- Бэби-английский'],
          aboutEducation: 'Высшее педагогическое образование, специальность «педагог начальных классов»',
          photo: require('@/assets/img/staff-unit0.svg')
        },
        {
          name: 'Максимова Елизавета2',
          profession: 'Специалист развивающих занятий',
          aboutSubtitle: 'Ведет программы:',
          aboutTitle: ['- Бэби-английский'],
          aboutEducation: 'Высшее педагогическое образование, специальность «педагог начальных классов»',
          photo: require('@/assets/img/staff-unit1.svg')
        },
        {
          name: 'Максимова Елизавета3',
          profession: 'Специалист развивающих занятий',
          aboutSubtitle: 'Ведет программы:',
          aboutTitle: ['- Бэби-английский'],
          aboutEducation: 'Высшее педагогическое образование, специальность «педагог начальных классов»',
          photo: require('@/assets/img/staff-unit2.svg')
        },
        {
          name: 'Максимова Елизавета4',
          profession: 'Специалист развивающих занятий',
          aboutSubtitle: 'Ведет программы:',
          aboutTitle: ['- Бэби-английский'],
          aboutEducation: 'Высшее педагогическое образование, специальность «педагог начальных классов»',
          photo: require('@/assets/img/staff-unit3.svg')
        }
      ]"
    />
    <VideoFragments @adopted="programModal" @confirm="confirmModal"
      :videos="[
        'https://www.youtube.com/embed/3QFk7FdWRIg?start=5',
        'https://www.youtube.com/embed/3QFk7FdWRIg?start=5',
        'https://www.youtube.com/embed/3QFk7FdWRIg?start=5',
        'https://www.youtube.com/embed/3QFk7FdWRIg?start=5',
        'https://www.youtube.com/embed/3QFk7FdWRIg?start=5'
      ]"
      :offerSubtitle="'Расскажем про бережное развитие интеллекта'"
      :offerTitle="'Приглашаем родителей на ознакомительную экскурсию по клубу'"
    />
    <Methodology id="methodology"/>
    <Faq @show="showQuestionModal"
      :faqLeft="[
        {
          id: 1,
          quest: 'Я могу заниматься с ребенком и дома. Почему занятия в бэби-клубе эффективнее?',
          answer: 'Для каждого возраста мы предлагаем определенный курс, учитывающий психологические и физиологические особенности малышей.'
        },
        {
          id: 2,
          quest: 'Что вы делаете, если заболевающего ребёнка с насморком или кашлем привели в клуб?',
          answer: 'Если кто-то из малышей болен и пришел в клуб, мы просим родителей с ребенком не оставаться на занятии в Бэби-клубе, а вернуться домой до полного выздоровления.'
        },
        {
          id: 3,
          quest: 'Почему у вас на занятии дети постоянно бегают из одной комнаты в другую?',
          answer: 'Наши специалисты знают, что малыши могут концентрироваться на чем-то одном не более 2–3 минут. Это мы используем в своей работе. Поработав 3 минуты в комнате для занятий, мы отпускаем малышей в игровую. Задания чередуются с игровыми минутками, то есть происходит постоянная смена деятельности. Тем самым мы ловим момент концентрации ребенка, когда он лучше всего «впитывает» информацию.'
        }
      ]"
      :faqRight="[
        {
          id: 4,
          quest: 'Как быстро мы начнем читать?',
          answer: 'Если детям от 8 месяцев до 2 лет, то к трем годам ваш ребенок сможет самостоятельно читать склады, а в 3,5 года — слова из трех-четырех букв. Если ребенок уже знает буквы, то уже в течение одного-двух месяцев он сможет читать простые слова. Если же буквы он пока знает не все или нетвердо, то начнет читать в течение полугода. Все ребята, которые занимаются в Бэби-клубе, начинают читать в три-четыре года. Хотелось бы отметить, что дети не просто смогут читать, а полюбят читать.'
        },
        {
          id: 5,
          quest: 'Как знание композиторов и художников связано с развитием интеллекта?',
          answer: 'Информация о композиторах, художниках, прослушивание классической музыки, ознакомление с репродукциями способствует развитию воображения, образного мышления, а развитие именно этих познавательных сфер благотворно влияет на развитие интеллекта.'
        },
        {
          id: 6,
          quest: 'Не устают ли дети за 1,5 часа?',
          answer: 'Малыши в Бэби-клубе не устают и не теряют интерес к предлагаемым заданиям благодаря правильной структуре занятия: дети могут и двигаться, и смотреть, и слушать, и петь — происходит постоянная смена деятельности.'
        }
      ]"
    />
    <TrustUse/>
    <PhotoGallery 
      :photos="[
         require('@/assets/img/photo-gallery-main-img.svg'),
         require('@/assets/img/photo1.svg'),
         require('@/assets/img/photo2.svg'),
         require('@/assets/img/photo3.svg')
      ]"
      :link="'#'"
    />
    <Reviews id="reviews"
      :videos="{
        tab1: [
          'https://www.youtube.com/embed/7ySDMmh4Bpg',
          'https://www.youtube.com/embed/7ySDMmh4Bpg',
          'https://www.youtube.com/embed/7ySDMmh4Bpg',
          'https://www.youtube.com/embed/7ySDMmh4Bpg'
        ],
        tab2: [
          'https://www.youtube.com/embed/D6SmEnxg3Rg',
          'https://www.youtube.com/embed/D6SmEnxg3Rg',
          'https://www.youtube.com/embed/D6SmEnxg3Rg',
          'https://www.youtube.com/embed/D6SmEnxg3Rg'
        ],
        tab3: [
          'https://www.youtube.com/embed/Nf1JOTCAnEY',
          'https://www.youtube.com/embed/Nf1JOTCAnEY',
          'https://www.youtube.com/embed/Nf1JOTCAnEY',
          'https://www.youtube.com/embed/Nf1JOTCAnEY'
        ],
        tab4: [
          'https://www.youtube.com/embed/boD2ZdC0pLE',
          'https://www.youtube.com/embed/boD2ZdC0pLE',
          'https://www.youtube.com/embed/boD2ZdC0pLE',
          'https://www.youtube.com/embed/boD2ZdC0pLE'
        ],
        tab5: [
          'https://www.youtube.com/embed/uup1wVybLfM',
          'https://www.youtube.com/embed/uup1wVybLfM',
          'https://www.youtube.com/embed/uup1wVybLfM',
          'https://www.youtube.com/embed/uup1wVybLfM'
        ]
      }"
    />
    <News id="news"
      :content="[
        {
          link: '#',
          img: require('@/assets/img/news-img-1.svg'),
          title: 'Заголовок новости',
          text: 'Track your child`s progress through developmental milestones.'
        },
        {
          link: '#',
          img: require('@/assets/img/news-img-2.svg'),
          title: 'Заголовок новости',
          text: 'Track your child`s progress through developmental milestones.'
        },
        {
          link: '#',
          img: require('@/assets/img/news-img-1.svg'),
          title: 'Заголовок новости',
          text: 'Track your child`s progress through developmental milestones.'
        }
      ]"
    />
    <Library @show="showModalEmail"
      :link="'#'"
    />
    <Insta
      :link="'#'"
      :content="[
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        },
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        },
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        },
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        },
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        },
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        },
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        },
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        },
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        },
        {
          img: require('@/assets/img/slide-1.svg'),
          text: 'Следите за новостями нашего клуба <span style=' + 'color:#ff9592;' + '>в instagram</span>'
        }
      ]"
    />
    <Contacts @show="showModal" id="contacts"
      :links="{
        facebook: '#',
        vk: '#',
        instagram: '#',
        youtube: '#'
      }"
      :mapCoords="['0', '0']"
      :marks="[
        ['0', '0'],
        ['20', '0'],
        ['0', '20'],
        ['10', '10']
      ]"
    />
    <Footer/>
    
    <!--Модалки-->
    <transition name="layout-fade">
      <ModalEmailForBook v-show="isModalEmail" @close="closeModal" @adopted="confirmModal"/>
    </transition>
    <transition name="layout-fade">
      <ModalCallMeBack v-show="isModalVisible" @close="closeModal" @adopted="confirmModal"/>
    </transition>
    <transition name="layout-fade">
      <ModalAdopted v-show="isAdoptedVisible" @closeModal="closeConfirmModal"/>
    </transition>
    <transition name="layout-fade">
      <ModalQuestion v-show="isQuestionVisible" @close="closeModal" @adopted="confirmModal"/>
    </transition>
    <transition name="layout-fade">
      <ModalProgramInfo v-show="isProgramInfoVisible" @close="closeModal" @confirm="confirmModal"
        :priceItem="[
          {
            name: '4 занятия по 1 ч. 50 мин.',
            price: '3 900 руб.'
          },
          {
            name: '8 занятий по 1 ч. 50 мин.',
            price: '5 400 руб.'
          }
        ]"
      />
    </transition>
    <transition name="layout-fade">
      <ModalAllTimetable v-if="isAllTimetableVisible" @close="closeModal" @confirm="confirmModal"
        :monday="[
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          }
        ]"
        :tuesday="[
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          }
        ]"
        :wednesday="[
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          }
        ]"
        :thursday="[
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          }
        ]"
        :friday="[
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          }
        ]"
        :saturday="[
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          }
        ]"
        :sunday="[
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          },
          {
            time: '09:30 - 10:30',
            group: 'Группа 1',
            name: 'БЭБИК 1',
            timeEng: '09:00 - 10:00',
            groupEng: 'Группа 2',
            nameEng: 'БЭБИК 1'
          }
        ]"
      />
    </transition>
    <transition name="layout-fade">
      <ModalMap v-show="isMapVisible" @close="closeModal"
        :mapCoords="['0', '0']"
        :marks="[
          ['0', '0'],
          ['20', '0'],
          ['0', '20'],
          ['10', '10']
        ]"
      />
    </transition>
    <transition name="fade">
      <Cookie v-if="isCookie" @closeCookie="closeModal"/>
    </transition>
    <go-top :boundary="600" bg-color="#4C85F7" weight="60" :max-width="319" ripple-bg="rgba(245, 88, 63, .5)" :right="15" :bottom="45"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import FirstBlock from '../components/FirstBlock.vue';
import SecondBlock from '../components/SecondBlock.vue';
import Why from '../components/Why.vue';
import Kindergarten from '../components/Kindergarten.vue';
import Staff from '../components/Staff.vue';

import Programs from '../components/Programs.vue';

import VideoFragments from '../components/VideoFragments.vue';
import Methodology from '../components/Methodology.vue';
import Faq from '../components/Faq.vue';
import TrustUse from '../components/TrustUse.vue';

import PhotoGallery from '../components/PhotoGallery.vue';
import Reviews from '../components/Reviews.vue';
import News from '../components/News.vue';
import Library from '../components/Library.vue';
import Insta from '../components/Insta.vue';
import Contacts from '../components/Contacts.vue';
import Footer from '../components/Footer.vue';

import ModalCallMeBack from '../components/ModalCallMeBack.vue';
import ModalEmailForBook from '../components/ModalEmailForBook.vue';
import ModalAdopted from '../components/ModalAdopted.vue';
import ModalQuestion from '../components/ModalQuestion.vue';
import ModalProgramInfo from '../components/ModalProgramInfo.vue';
import ModalAllTimetable from '../components/ModalAllTimetable.vue';
import ModalMap from '../components/ModalMap.vue';

import Cookie from '../components/Cookie.vue';

import GoTop from '@inotom/vue-go-top';
export default {
  name: "landing",
  components: {
    GoTop,
    Header,
    FirstBlock,
    SecondBlock,
    Why,
    Kindergarten,
    
    Staff,
    Programs,
    
    VideoFragments,
    Methodology,
    Faq,
    TrustUse,
    
    PhotoGallery,
    Reviews,
    News,
    Library,
    Insta,
    Contacts,
    Footer,
    ModalCallMeBack,
    ModalEmailForBook,
    ModalAdopted,
    ModalQuestion,
    ModalProgramInfo,
    ModalAllTimetable,
    ModalMap,
    Cookie
  },
  
   data () {
    return {
      isModalVisible: false,
      isAdoptedVisible: false,
      isQuestionVisible: false,
      isProgramInfoVisible: false,
      isAllTimetableVisible: false,
      isCookie: false,
      isMapVisible: false,
      isModalEmail: false
    };
  },
  watch: {},
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    showModalEmail() {
      this.isModalEmail = true;
    },
    showModalMap() {
      this.isMapVisible = true;
    },
    showQuestionModal() {
      this.isQuestionVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.isQuestionVisible = false;
      this.isProgramInfoVisible = false;
      this.isAllTimetableVisible = false;
      this.isCookie = false;
      this.isMapVisible = false;
      this.isModalEmail = false;
    },
    confirmModal() {
      this.isModalVisible = false;
      this.isAdoptedVisible = true;
      this.isQuestionVisible = false;
      this.isProgramInfoVisible = false;
      this.isModalEmail = false;
    },
    closeConfirmModal() {
      this.isAdoptedVisible = false;
    },
    programModal() {
      this.isProgramInfoVisible = true;
    },
    showAllTimetable() {
      this.isAllTimetableVisible = true;
    },
    
    showCookie() {
      this.isCookie = true;
    },
    
  },
  mounted() {
    setTimeout(()=>{
      this.showCookie();
    },3000);
  }
};
</script>

<style lang="less">
@import "../assets/less/variables.less";
#app {
  font-family: @font-Muller;
  font-style: normal;
}
.container {
  width: 100%;
  max-width: 1148px;
  margin: 0 auto;
  position: relative;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /*border: 1px solid red;*/
}
.padding {
  width: 100%;
  height: 174px;
  @media (max-width: 1170px) {
    height: 94px;
  }
}
.landing {
  position: relative;
  overflow: hidden;
}

.vue-go-top {
  outline: none;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.layout-fade-enter-active,
.layout-fade-leave-active {
  transition: opacity 1s;
}
.layout-fade-enter,
.layout-fade-leave-to {
  opacity: 0;
}
</style>
