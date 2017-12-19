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
      url: '/dfit',
      icon: 'icon-graph',
    },
    {
      name: 'Flowback',
      url: '/flowback',
      icon: 'icon-graph',
    },
    {
      name: 'Frac',
      url: '/frac',
      icon: 'icon-graph',
    },
    {
      name: 'Offset',
      url: '/offset',
      icon: 'icon-graph'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Historical Data'
    },
    {
      name: 'Reports',
      url: '/historical-data',
      icon: 'icon-star',
      children: [
        {
          name: 'DFIT',
          url: '/historical-dfit',
          icon: 'icon-star'
        },
        {
          name: 'Flowback',
          url: '/historical-flowback',
          icon: 'icon-star'
        },
        {
          name: 'Frac',
          url: '/historical-frac',
          icon: 'icon-star'
        },
        {
          name: 'Offset',
          url: '/historical-offset',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Export Data',
      url: '/export',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Alarms',
      url: '/alarms',
      icon: 'icon-bell',
      variant: 'danger'
    }
  ]
};
