const mongoose = require('mongoose')
const Submission = mongoose.model('Submission')

const getAllSubmissions = async (req, res) => {
  const submissions = await Submission.find()
  return res.status(200).json({ submissions })
}

const createSubmission = (req, res) => {
  const { text } = req.body
  const submission = new Submission()
  submission.text = text

  return submission.save()
    .then(result => res.status(200).json({ result }))
    .catch((err) => {
      res.status(400).json({ message: 'Error adding submission', error: err })
    })
}

const deleteSubmission = async (req, res) => {
  const { id } = req.body
  const result = await Submission.deleteOne({ id })
  return res.status(200).json({ result })
}

module.exports = { getAllSubmissions, createSubmission, deleteSubmission }
