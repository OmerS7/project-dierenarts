import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPaw, faUser, faCalendar, faEnvelope, faAnglesLeft, faArrowRight, faChevronUp, faCat, faFish, faDove, faKiwiBird, faMouse, faLocust } from '@fortawesome/free-solid-svg-icons';
import { faTiktok, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Header from '../../molecules/Header/Header';
import Card from '../../organisms/card/card';
import Button from '../../atoms/buttons/Button';
import CombinedFooter from '../../organisms/FooterDual/CombinedFooter';
import Progressbar from '../../atoms/progressBar/progressBar';
import SummaryCard from '../../organisms/summaryCard/summaryCard';

import './_secondPage.style.scss';

const SecondPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [progressFilled, setProgressFilled] = useState(0);
  const [currentCard, setCurrentCard] = useState(1);
  const [formData, setFormData] = useState({});

  const headerData = {
    logoSrc:'',
    logoAlt:"Logo HappyPaw",
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
    setProgressFilled(25);
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

  const handleNextCard = () => {
    // Update de voortgang en huidige kaartstatus
    setProgressFilled((prevProgress) => prevProgress + 33.3);
    setCurrentCard((prevCard) => (prevCard === 2 ? 3 : prevCard + 1));
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

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
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
              {/* Render de huidige kaart op basis van de huidige kaartstatus */}
              {currentCard === 1 && <Card {...cardData} updateFormData={updateFormData} />}
              {/* Nieuwe overzichtskaart met de ingevoerde gegevens */}
              {currentCard === 2 && <SummaryCard formData={formData} />}
            </div>

            {/* Volgende knop */}
            <div className="button-wrapper">
              <div className='buttons-af hovered'>
                {/* Controleer de kaartstatus voor het tonen van de juiste knop en verwerkingslogica */}
                {currentCard === 1 && (
                  <Button size="extraSmall" icon={faArrowRight} className="icon-button-right" onClick={handleNextCard}>
                    Volgende
                  </Button>
                )}
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