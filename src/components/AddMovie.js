import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


function AddMovie({add}) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Poster, setPoster] = useState("");
  const [Rate, setRate] = useState("");
  const [Id, setId] = useState();
  const [Trailer, setTrailer] = useState();
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(Title, Description, Poster, Rate,Id,Trailer);
    setShow(false);
    setTitle("");
    setDescription("");
    setPoster("");
    setRate("");
    setId("");
    setTrailer("");

  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="" value ={Title} onChange ={e => setTitle(e.target.value)}/>
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="" value ={Description} onChange ={e => setDescription(e.target.value)}/>
    <Form.Label>Poster</Form.Label>
    <Form.Control type="text" placeholder=""value ={Poster} onChange ={e => setPoster(e.target.value)} />
    <Form.Label>Rate</Form.Label>
    <Form.Control type="text" placeholder="" value ={Rate} onChange ={e => setRate(e.target.value)}/>
    <Form.Label>Id</Form.Label>
    <Form.Control type="text" placeholder="" value ={Id} onChange ={e => setId(e.target.value)}/>
    <Form.Label>Trailer</Form.Label>
    <Form.Control type="text" placeholder="" value ={Trailer} onChange ={e => setTrailer(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie
