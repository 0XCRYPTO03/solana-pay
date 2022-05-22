/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

    // But you can create a sidebar manually

    tutorialSidebar: [
        {
            type: 'doc',
            id: 'INTRODUCTION',
            label: 'Introduction',
        },
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                'core/OVERVIEW',
                {
                    type: 'doc',
                    id: 'SPEC',
                    label: 'Specification',
                },
            ],
            collapsed: false,
        },
        {
            type: 'category',
            label: 'Transaction Request',
            items: [
                'core/transaction-request/OVERVIEW',
                {
                    type: 'doc',
                    id: 'core/transaction-request/MERCHANT_INTEGRATION',
                    label: 'Create a transaction request',
                },
            ],
            collapsed: true,
        },
        {
            type: 'category',
            label: 'Transfer Request',
            items: [
                {
                    type: 'doc',
                    id: 'core/transfer-request/MERCHANT_INTEGRATION',
                    label: 'Create a transfer request',
                },
                'core/transfer-request/WALLET_INTEGRATION',
            ],
            collapsed: true,
        },
        {
            type: 'link',
            label: 'API Reference',
            href: '/api',
        },
    ],
};

module.exports = sidebars;
