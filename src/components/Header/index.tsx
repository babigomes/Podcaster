import styles from './styles.module.scss';

import Image from 'next/image'
import logo from '../../../public/logo.svg'

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default function Header() {
  const currentDate = format(new Date(), 'EEEE, d, MMMM', {
    locale:ptBR,
  });
  
  return (
    <header className={styles.headerContainer}>
      <Image src={logo} alt="Podcastr" />
    
      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  )
}