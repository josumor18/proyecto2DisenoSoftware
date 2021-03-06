var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var VENDEDORES_COLLECTION = "vendedores";
var PROMOS_COLLECTION = "promociones";
var PRODS_COLLECTION = "productos";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
    
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/vendedoress"
 *    GET: finds all vendedores
 *    POST: creates a new vendedor
 */

app.get("/api/vendedores", function(req, res) {
  db.collection(VENDEDORES_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get vendedores.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/vendedores", function(req, res) {
  var newVendedor = req.body;

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(VENDEDORES_COLLECTION).insertOne(newVendedor, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new vendedor.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/combos"
 *    GET: finds all combos
 */
app.get("/api/combos", function(req, res) {
  db.collection(PROMOS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get promocion.");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*  "/api/productos"
 *    GET: finds all productos
 */
app.get("/api/productos", function(req, res) {
  db.collection(PRODS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get producto.");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*  "/api/vendedores/:id"
 *    GET: find vendedor by id
 *    PUT: update vendedor by id
 *    DELETE: deletes vendedor by id
 */

app.get("/api/vendedores/:id", function(req, res) {
  db.collection(VENDEDORES_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get vendedor");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/vendedores/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(VENDEDORES_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update vendedor");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/vendedores/:id", function(req, res) {
  db.collection(VENDEDORES_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete vendedor");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});


/*  "/api/combos/:id"
 *    GET: find combo by id
 */

app.get("/api/combos/:id", function(req, res) {
  db.collection(PROMOS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get promocion");
    } else {
      res.status(200).json(doc);
    }
  });
});

/*  "/api/productos/:id"
 *    GET: find producto by id
 */

app.get("/api/productos/:id", function(req, res) {
  db.collection(PRODS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get producto");
    } else {
      res.status(200).json(doc);
    }
  });
});