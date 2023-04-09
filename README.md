# CRUD-operations-on-Camera-entity

1. Table Cameras fields: name, description, url etc.
2. Table CameraNetworks fields: name, descriptions, cameras etc.
Requirement- Create REST APIs using expressJs that allows to perform CRUD operations on Camera entity,
as well as do CRUD operations on "network of cameras"(CameraNetworks).
The "networks of camera" will consist of "cameras" that can be mutually inclusive.
On performing the delete operations on the camera table the CameraNetworks table should be updated accordingly.

This project built in using Express js , Node js , and DynamoDB 

This project is to perform CRUD operations on Cameras entity

here is api for camera table
http://localhost:8000/api/add-camera, method post req.body:{ name, description, url }
http://localhost:8000/api/get-camera, method post red.body: {name}
http://localhost:8000/api/getall-camera, method get
http://localhost:8000/api/update-camera, method put req.body:{ name, description, url }
http://localhost:8000/api/delete-camera, method delete req.body:{name}

here is api for cameranetwork table
http://localhost:8000/api/add-camera-net, method post req.body:{ name, description, cameras }
http://localhost:8000/api/get-camera-net, method post red.body: {name}
http://localhost:8000/api/getall-camera-net, method get
http://localhost:8000/api/update-camera-net, method put req.body:{ name, description, cameras }
http://localhost:8000/api/delete-camera-net, method delete req.body:{name}
