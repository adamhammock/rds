export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
        },
    {
      title: true,
      name: 'Reports',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'DFIT',
      url: '/components',
      icon: 'icon-graph',
      children: [
        {
          name: 'Buttons',
          url: '/components/buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Social Buttons',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/components/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/components/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Modals',
          url: '/components/modals',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/components/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/components/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/components/tabs',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Flowback',
      url: '/icons',
      icon: 'icon-graph',
      children: [
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Frac',
      url: '/widgets',
      icon: 'icon-graph',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Offset',
      url: '/charts',
      icon: 'icon-graph'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Export Data',
      url: 'http://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Alarms',
      url: 'http://coreui.io/pro/react/',
      icon: 'icon-bell',
      variant: 'danger'
    }
  ]
};
