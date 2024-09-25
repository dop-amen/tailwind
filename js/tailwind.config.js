tailwind.config = {
    theme: {
      extend: {
          // background image start
          backgroundImage: {
            'banner': "url('../images/bannerbg.jpg')",
          },
          // background image end
        colors: {
          'navbarbg': 'rgba(22, 12, 109, 0.5)',
          'hColor': '#1BBF00',
          'over':'rgba(106, 98, 197, 0.9)'
        },
        maxWidth: {
            'HeaderContainer': '1320px',
          },
          maxWidth: {
            'bannerContainer': '950px',
          },
          transitionDuration: {
            '200': '200ms',
          },
          
          fontFamily: {
            'open': ["Open Sans"],
            
          },
          fontFamily: {
            'pap': ["Paprika"],
            
          }
      }
    }
  }
