const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()       // ✅ Create Express app
const PORT = 3001
const CONTACTS_FILE = 'contacts.json'

// Middleware
app.use(cors())             // Allow frontend to call backend
app.use(bodyParser.json())  // Parse JSON body

// Ensure contacts.json exists
if (!fs.existsSync(CONTACTS_FILE)) {
  fs.writeFileSync(CONTACTS_FILE, '[]')
}

// POST /contact
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // Safely read existing contacts
  let contacts = []
  try {
    const data = fs.readFileSync(CONTACTS_FILE, 'utf-8')
    contacts = data ? JSON.parse(data) : []
  } catch (err) {
    contacts = []
  }

  // Add new message
  contacts.push({ name, email, message, date: new Date() })

  // Save back to file
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2))

  res.json({ success: true, message: 'Message received!' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Express backend running on http://localhost:${PORT}`)
})
