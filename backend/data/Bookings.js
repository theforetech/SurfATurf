
db.createCollection( 'Bookings', {validator: {$jsonSchema: {bsonType: 'object',title:'Bookings',required: [         'Turfs',          'slots',          'razorpay'],properties: {Turfs: {bsonType: 'objectId'},slots: {bsonType: 'objectId'},date: {bsonType: 'date'},payment: {bsonType: 'bool'},razorpay: {bsonType: 'objectId'}}         }      }});  