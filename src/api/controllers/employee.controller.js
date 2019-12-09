const Product = require('../models/employee.model')

// Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!')
}

exports.product_create = function (req, res) {
  const product = new Product(
    {
      name: req.query.name,
      login: req.query.login,
      feedback: req.query.feedback
    }
  )

  product.save(function (err) {
    if (err) {
      return next(err)
    }
    res.send('Product Created successfully')
  })
}

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) { return next(err) }
    res.send(product)
  })
}

exports.product_list = function (req, res) {
  const list = Product.find({})
  try { res.send(list) } catch (err) { res.status(500).send(err) }
  //   Product.find(function (err, product) {
  //     if (err) return next(err)
  //     res.send(product)
  //   })
  //   const foods = Product.find({})

//   try {
//     res.send(foods)
//   } catch (err) {
//     res.status(500).send(err)
//   }
}

exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return next(err)
    res.send('Product udpated.')
  })
}

exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err)
    res.send('Deleted successfully!')
  })
}
