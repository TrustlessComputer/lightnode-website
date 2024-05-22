export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  isNewWindow?: boolean;
  href?: string;
  isHide?: boolean;
  isTwitter?: boolean;
  isStrong?: boolean;
  subMenu?: any;
}

export const MenuBuild = {
  label: 'Build',
  isNewWindow: false,
  isHide: false,
  subMenu: [
    {
      href: '/blockchains',
      label: 'Bitcoin L2s',
      isNewWindow: false,
    },
    {
      href: '/module-store',
      label: 'Module Store',
      isNewWindow: false,
    },
    {
      href: '/',
      label: 'Developer Docs',
      isNewWindow: true,
    },
    {
      href: '/',
      label: 'Developer Grants',
      isNewWindow: true,
    },
  ],
};

export const NAV_ITEMS_LEFT: Array<NavItem> = [
  {
    label: 'Products',
    isNewWindow: false,
    isHide: false,
    subMenu: [
      {
        href: '/ai-on-bitcoin',
        label: 'AI on Bitcoin',
        isNewWindow: false,
      },
      {
        href: '/smart-contracts-on-bitcoin',
        label: 'Smart contracts on Bitcoin',
        isNewWindow: false,
      },
      {
        href: '/bitcoin-l2s',
        label: 'Bitcoin L2s',
        isNewWindow: false,
      },
      {
        href: '/module-store',
        label: 'Module Store',
        isNewWindow: false,
      },
    ],
  },

  {
    label: 'Solutions',
    // href: DEVELOPERS_DOC_URL,
    isNewWindow: false,
    isHide: false,
    subMenu: [
      {
        href: '/use-bitcoin',
        label: 'Success Stories',
        isNewWindow: false,
      },
      {
        href: '/ai',
        label: 'Bitcoin L2 for AI',
        isNewWindow: false,
      },
      {
        href: '/gamefi',
        label: 'Bitcoin L2 for GameFi',
        isNewWindow: false,
      },
      {
        href: '/defi',
        label: 'Bitcoin L2 for DeFi',
        isNewWindow: false,
      },
      {
        href: '/socialfi',
        label: 'Bitcoin L2 for SocialFi',
        isNewWindow: false,
      },
    ],
  },
].filter((item) => !item.isHide);

export const NAV_ITEMS: Array<NavItem> = [...NAV_ITEMS_LEFT].filter(
  (item) => !item.isHide,
);
