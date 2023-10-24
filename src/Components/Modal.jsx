import React from 'react'

const STYLE_BACKGROUND = {
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: '1000'
}

const STYLE_MODAL = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '250px',
    backgroundColor: '#fff',
    borderRadius: '12px'
}

export default function Modal({isOpen, children, setFechaModal}) {

  
  if(isOpen) {
      return(
          <div style={STYLE_BACKGROUND}>
            <div style={STYLE_MODAL}>
                <div>
                    {children}
                </div>
                <button onClick={setFechaModal}>Fechar</button>
                </div>
            </div>  
      )
  }
  return null
}