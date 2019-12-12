import Model from '../models/employee.model'
import setup from '../../confServer/setup'

export const status200 = (data, res) => {
  res.status(setup.status200.code).set(setup.headers).send(data || setup.status200.message).end()
}
export const status400 = (res) => {
  res.status(setup.status400.code).set(setup.headers).send(setup.status400).end()
}
export const status404 = (res) => {
  res.status(setup.status404.code).set(setup.headers).send(setup.status404).end()
}
export const status500 = (err, res) => {
  res.status(setup.status500.code).set(setup.headers).send(err).end()
}

export const userCreate = async (req, res) => {
  const user = new Model(req.query)
  await user.save()
    .then((result) => { result ? status200(result, res) : status404(res) })
    .catch((err) => { status500(err, res) })
}

export const userList = async (req, res) => {
  await Model.find({})
    .then((result) => { result ? status200(result, res) : status404(res) })
    .catch((err) => { status500(err, res) })
}

export const userDetails = async (req, res) => {
  await Model.findById(req.params.id)
    .then((result) => { result ? status200(result, res) : status404(res) })
    .catch((err) => { status500(err, res) })
}

export const userFind = async (req, res) => {
  await Model.findOne({ login: req.params.login })
    .then((result) => {
      if (result) {
        const data = {
          name: result.name,
          login: result.login,
          feedback: result.feedback,
          id: result.id
        }
        status200(data, res)
      } else status404(res)
    })
    .catch((err) => { status500(err, res) })
}

export const userUpdate = async (req, res) => {
  await Model.findByIdAndUpdate(req.params.id, req.query)
    .then((result) => {
      if (result) {
        // const data = await Model.findById(req.params.id)
        status200(result, res)
      } else status404(res)
    })
    .catch((err) => { status500(err, res) })
}

export const userDelete = async (req, res) => {
  await Model.findByIdAndDelete(req.params.id)
    .then((result) => { result ? status200(result, res) : status404(res) })
    .catch((err) => { status500(err, res) })
}
