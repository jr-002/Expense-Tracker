module.exports = {
  // Personal access token for lovable.dev
  token: '0Zlo36j6r4cUu830r1lB6ksKQpG2',
  
  // Build command
  build: 'npm run build',

  // Allow Loveable to access all files in the project
  include: ['**/*'],
  
  // Exclude sensitive files and directories
  exclude: [
    'node_modules/**',
    '.env',
    '.env.*',
    'dist/**',
    'build/**'
  ],

  // Project metadata
  project: {
    name: 'Expense-Tracker',
    description: 'An expense tracking application with authentication and Supabase integration'
  },

  // Define the main entry points of your application
  entryPoints: [
    'src/main.jsx',
    'src/App.jsx'
  ],

  // Configure which file types should be analyzed
  fileTypes: [
    'js',
    'jsx',
    'css',
    'html',
    'sql'
  ]
}
