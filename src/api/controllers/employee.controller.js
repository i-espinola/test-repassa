import Model from '../models/employee.model'
import setup from '../../configServer/setup'

const callBack = (data, res) => {
  try {
    if (!data) res.status(setup.status404.code).send(setup.status404).set(setup.headers).end()
    res.status(setup.status200.code).set(setup.headers).send(data).end()
  } catch (err) {
    res.status(setup.status500.code).set(setup.headers).send(err).end()
  }
}

export const errorBadRequest = (req, res) => { res.status(setup.status400.code).set(setup.headers).send(setup.status400).end() }

export const userCreate = async (req, res) => {
  const user = new Model(req.query)
  const data = await user.save()

  callBack(data, res)
}

export const userList = async (req, res) => {
  const data = await Model.find({})
  callBack(data, res)
}

export const userDetails = async (req, res) => {
  const data = await Model.findById(req.params.id)
  callBack(data, res)
}

export const userUpdate = async (req, res) => {
  await Model.findByIdAndUpdate(req.params.id, req.query, { useFindAndModify: false })
  const data = await Model.findById(req.params.id)
  callBack(data, res)
}

export const userDelete = async (req, res) => {
  const data = await Model.findByIdAndDelete(req.params.id)
  callBack(data, res)
}
