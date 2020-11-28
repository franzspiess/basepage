import git from '../icons_hub.png'
import linkedin from '../icons_link.png'
import email from '../icons_mail.png'
import phone from '../icons_phone.png'
import React from 'react'
import Column from './Column'

export default function Card({handleClick}:{handleClick: (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void}) {
  return (
    <div className='card'>
      <Column
        width='33%'
        alignItems='flex-start'
      >
        <div className='content text'>
          <h1>Franz Spiess</h1>
          <h3>developing</h3>
        </div>
        <div className='content text'>
          <h4>React/Redux</h4>
          <h4>Typescript</h4>
          <h4>NodeJS</h4>
          <h4>Python</h4>
          <h4>Splunk</h4>
        </div>
        <div className='content logos'>
          <a id='git' href='https://github.com/franzspiess' target='blank' onClick={handleClick}>
            <img className='logo' src={git} alt='github' />
          </a>
          <a id='linkedin' href='https://linkedin.com/in/franzspiess' target='blank' onClick={handleClick}>
            <img className='logo' src={linkedin} alt='linkedin' />
          </a>
          <a id='mailto' href="mailto:contact@franzspiess.com" target="blank" onClick={handleClick}>
            <img className='logo' src={email} alt='email' />
          </a>
          <a id='call' href="skype:pinchepanchopincho?call" target="blank" onClick={handleClick}>
          <img id='call' className='logo' src={phone} alt='phone' />
          </a>
        </div>
      </Column>
      {/* <Column
        width='34%'
        alignItems='center'
      >
      </Column>
      <Column
        width='33%'
        alignItems='flex-start'>
      </Column> */}
    </div>
  )
}