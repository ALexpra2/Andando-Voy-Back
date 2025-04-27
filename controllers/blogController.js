const BlogPost = require('../models/BlogPost');

// Ver todos los posts del blog
const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener los posts' });
  }
};

// Crear un nuevo post
const createPost = async (req, res) => {
  try {
    const post = await BlogPost.create({ ...req.body });
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: 'Hubo un problema al crear el post' });
  }
};

// Editar un post existente
const updatePost = async (req, res) => {
  try {
    const actualizado = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(actualizado);
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: 'Error al actualizar el post' });
  }
};

// Eliminar un post
const deletePost = async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: 'Post eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al eliminar el post' });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost
};
