import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../molecules/Header/Header';
import Card from '../../organisms/card/card';
import Card2 from '../../organisms/card2/card2';
import CardWithInputs from '../../organisms/card3/card3';
// import Card4 from '../../organisms/card4/card4';  // Importeer Card4
import Button from '../../atoms/buttons/Button';
import CombinedFooter from '../../organisms/FooterDual/CombinedFooter';
import { faTiktok, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPaw, faUser, faCalendar, faEnvelope, faAnglesLeft, faArrowRight, faChevronUp, faCat, faFish, faDove, faKiwiBird, faMouse, faLocust } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Progressbar from '../../atoms/progressBar/progressBar';
import './_secondPage.style.scss';


const SecondPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [progressFilled, setProgressFilled] = useState(0);
  const [currentCard, setCurrentCard] = useState(1); // 1 voor Card en 2 voor Card2

  const headerData = {
    menuOptions: [
      { label: 'Home', icon: faHome },
      { label: 'About', icon: faPaw },
      { label: 'Contact', icon: faEnvelope },
      { label: 'Afspraak', icon: faCalendar },
      { label: 'Login', icon: faUser },
    ],
    onMenuToggle: () => setMenuOpen(!isMenuOpen),
  };

  const generateTimeOptions = (startHour, endHour) => {
    const times = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      times.push(`${hour}:00`);
      times.push(`${hour}:30`);
    }
    return times;
  };

  const handleNextClick = () => {
    setProgressFilled(25); // Set the filled state to 25% on "Next" button click
  };

  const cardData = {
    buttonBarData: [
      { label: 'Geen Voorkeur', onClick: () => { /* handle button click */ } },
      { label: 'Danique', onClick: () => { /* handle button click */ } },
      { label: 'Karel', onClick: () => { /* handle button click */ } },
    ],

    dropdownGroupData: {
      texts: ['Ochtend', 'Namiddag'],
      icons: [faChevronUp, faChevronUp],
      dropdowns: [{ options: generateTimeOptions(9, 11), onSelect: (selectedOption) => {} },
                  { options: generateTimeOptions(12, 17), onSelect: (selectedOption) => {} }],
    },
  };

  const card2Data = {
    buttonBarRow1: [
      { label: 'Nieuwe klant', size: 'large', onClick: () => { /* handle button click */ } },
      { label: 'Huidige klant', size: 'large', onClick: () => { /* handle button click */ } },
    ],
    buttonBarRow2: [
      { label: '1', size: 'extraSmall', onClick: () => { /* handle button click */ } },
      { label: '2', size: 'extraSmall', onClick: () => { /* handle button click */ } },
      { label: '3', size: 'extraSmall', onClick: () => { /* handle button click */ } },
      { label: '4', size: 'extraSmall', onClick: () => { /* handle button click */ } },
    ],
    buttonBarRow3: [
      { icon: faCat, onClick: () => { /* handle button click */ } },
      { icon: faFish, onClick: () => { /* handle button click */ } },
      { icon: faDove, onClick: () => { /* handle button click */ } },
      { icon: faKiwiBird, onClick: () => { /* handle button click */ } },
      { icon: faMouse, onClick: () => { /* handle button click */ } },
      { icon: faLocust, onClick: () => { /* handle button click */ } },
    ],
    dropdownOptions: ['Optie 1', 'Optie 2', 'Optie 3'],
  };

  const footerData = {
    leftText: ['About HappyPaw', 'Contact us'],
    rightText: ['HappyPaw 2023 '],
    socialIcons: [
      { icon: faXTwitter, link: 'https://twitter.com/' },
      { icon: faInstagram, link: 'https://www.instagram.com/' },
      { icon: faYoutube, link: 'https://www.youtube.com/' },
      { icon: faTiktok, link: 'https://www.tiktok.com/' },

    ],
  };

  const handleNextCard = () => {
    setProgressFilled((prevProgress) => prevProgress + 33.3); // Verhoog de voortgang met 25% bij elke kaartwisseling
    setCurrentCard((prevCard) => (prevCard === 3 ? 4 : prevCard + 1));
  };

  const handleBackClick = () => {
    if (currentCard === 1) {
      const userConfirmed = window.confirm("Weet je zeker dat je terug wilt? De ingevoerde gegevens worden verwijderd.");

      if (userConfirmed) {
        const newProgress = Math.max(0, progressFilled - 33.3); // Verminder de voortgang met 25%, maar niet onder 0
        setProgressFilled(newProgress);
        window.location.href = '/';
      }
    } else {
      const newProgress = Math.max(0, progressFilled - 33.3); // Verminder de voortgang met 25%, maar niet onder 0
      setProgressFilled(newProgress);
      setCurrentCard((prevCard) => (prevCard === 1 ? 3 : prevCard - 1));
    }
  };

  const showAlert = () => {
    const userConfirmed = window.confirm("Weet je zeker dat je terug wilt? De ingevoerde gegevens worden verwijderd.");

    if (userConfirmed) {
      // Navigeer terug alleen als de gebruiker bevestigt
      setProgressFilled(0); // Reset de voortgang bij teruggaan naar de eerste kaart
      setCurrentCard(1);
    }
  };

  const cardWithInputsData = {
    title: 'Vul onderstaande gegevens in',
  };

  return (
    <div className="HomePage">
      <Header {...headerData} />
      <main>
        <div className='Content'>
          <div className='titel-page2'>Afspraak maken</div>

            <div className='content-card'>
            <div className="button-wrapper">
              <div className='buttons-be hovered'>
                <p className='button-text-second-back'>Terug</p>
                <Button size="extraSmall" icon={faAnglesLeft} className="icon-button-left" onClick={handleBackClick} />
              </div>
            </div>
            
            <div className='card2'>
                {currentCard === 1 && <Card {...cardData} />}
                {currentCard === 2 && <Card2 {...card2Data} />}
                {currentCard === 3 && <CardWithInputs {...cardWithInputsData} />}
              </div>
            
              {/* Volgende knop */}
              <div className="button-wrapper">
                <div className='buttons-af hovered'>
                  <Button size="extraSmall" icon={faArrowRight} className="icon-button-right" onClick={handleNextCard} />
                <p className='button-text-second-next'>Volgende</p>
                </div>
              </div>
            </div>
          </div>
            <div className='progessbar'>
              <Progressbar progressFilled={progressFilled} />
            </div>
        <div className='brown-background'> </div>
      </main>

      <CombinedFooter {...footerData} />
    </div>
  );
};

export default SecondPage;