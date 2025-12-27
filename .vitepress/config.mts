import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "99_life",
  description: "Personal life planning and documentation",
  srcDir: '.',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ライフプラン', link: '/ライフプラン/2025年末diewithzero/README' },
      { text: 'Daily Notes', link: '/dailynote/' }
    ],

    sidebar: {
      '/ライフプラン/2025年末diewithzero/': [
        {
          text: '🎯 結論 (Conclusion)',
          collapsed: false,
          items: [
            { text: 'Concept Bible', link: '/ライフプラン/2025年末diewithzero/01_結論_Conclusion/00_Concept_Bible' },
            { text: 'My Core Desires', link: '/ライフプラン/2025年末diewithzero/01_結論_Conclusion/01_My_Core_Desires' }
          ]
        },
        {
          text: '🚀 次の計画 (Next Actions)',
          collapsed: false,
          items: [
            { text: 'Current Phase', link: '/ライフプラン/2025年末diewithzero/02_次の計画_Next_Actions/00_Current_Phase' },
            { text: 'Experiments To Run', link: '/ライフプラン/2025年末diewithzero/02_次の計画_Next_Actions/01_Experiments_To_Run' }
          ]
        },
        {
          text: '📦 Archive (思考プロセス)',
          collapsed: true,
          items: [
            { text: 'Archive Index', link: '/ライフプラン/2025年末diewithzero/99_Archive_思考プロセス/00_Archive_Index' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
