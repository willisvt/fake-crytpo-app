export const menuItems = [
    {
        id: 1,
        label: 'menuitems.dashboards.text',
        icon: 'bx-home-circle',
        link: '/',
    },
    {
        id: 2,
        label: 'menuitems.crypto.list.wallet',
        icon: 'bx-wallet',
        link: '/crypto/wallet',
    },
    {
        id: 3,
        label: 'menuitems.crypto.list.buy/sell',
        icon: 'bx-money',
        link: '/crypto/buy-sell',
    },
    {
        id: 4,
        label: 'menuitems.crypto.list.exchange',
        link: '/crypto/exchange',
        parentId: 1,
    },
    {
        id: 5,
        label: 'menuitems.crypto.list.orders',
        link: '/crypto/orders',
    },
    {
        id: 32,
        label: "More",
        parentId: 29,
        subItems: [
            {
                id: 51,
                label: 'menuitems.crypto.list.kycapplication',
                link: '/crypto/kyc-application',
                parentId: 45
            },
            {
                id: 52,
                label: 'menuitems.crypto.list.icolanding',
                link: '/crypto/ico-landing',
                parentId: 45
            },
        ]
    }
  
];

