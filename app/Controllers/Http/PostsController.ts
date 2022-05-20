import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Post from 'Database/Models/Post';

export default class PostsController {
  public async index({ params, response }: HttpContextContract) {
    const post = await Post.findByOrFail('id', params.id);
    if (post) {
      return response.status(200).json(post);
    }
    return response.status(404).notFound();
  }

  public async getAll({ response }: HttpContextContract) {
    const posts = await Post.all();
    if (posts) {
      return response.status(200).json(posts);
    }
    return response.status(404).notFound();
  }

  public async create({ request, response }: HttpContextContract) {
    const input = request.only(['title', 'textBody', 'published']);
    const post = await Post.create(input);
    return response.status(200).created(post);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const input = request.only(['title', 'textBody', 'published']);
    const post = await Post.findByOrFail('id', params.id);
    if (post) {
      post.merge(input);
      await post.save();
      return response.status(204).noContent();
    }
    return response.status(404).notFound();
  }

  public async delete({ params, response }: HttpContextContract) {
    const post = await Post.findByOrFail('id', params.id);
    if (post) {
      await post.delete();
      return response.status(204).noContent();
    }
    return response.status(404).notFound();
  }
}
