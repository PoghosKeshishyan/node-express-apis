const express = require('express');
const router = express.Router();
const { all, post, add, edit, remove } = require('../controllers/posts');

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - body
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier of the post
 *         title:
 *           type: string
 *           description: Title of the post
 *         body:
 *           type: string
 *           description: Body of the post
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     tags: [posts]
 *     responses:
 *       200:
 *         description: List of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
router.get('/', all);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get a post by ID
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post
 *     responses:
 *       200:
 *         description: Post found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found
 */
router.get('/:id', post);

/**
 * @swagger
 * /api/posts/add:
 *   post:
 *     summary: Add a new post
 *     tags: [posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the post
 *               body:
 *                 type: string
 *                 description: Body of the post
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post('/add', add);

/**
 * @swagger
 * /api/posts/edit/{id}:
 *   put:
 *     summary: Edit an existing post
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the post
 *               body:
 *                 type: string
 *                 description: Body of the post
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       400:
 *         description: Missing required fields
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.put('/edit/:id', edit);

/**
 * @swagger
 * /api/posts/remove/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post to delete
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.delete('/remove/:id', remove);

module.exports = router;