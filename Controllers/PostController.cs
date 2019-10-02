using System.Collections.Generic;
using System.Linq;
//reference databasecontext
using reddit_capstone;
using StackOverFlow.Models;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using StackOverFlow.ViewModels;

namespace StackOverFlow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PostController : ControllerBase
  {
    //dependency injection
    private DatabaseContext context;

    public PostController(DatabaseContext _context)
    {
      this.context = _context;
    }
    //the only requests that should be [FromBody] is post and put, get and delete are NOT [FromBody]

    //make a question
    [HttpPost]
    public ActionResult<Post> CreateEntry([FromBody]Post entry)
    {
      context.Posts.Add(entry);
      context.SaveChanges();
      return entry;
    }

    [HttpPost("{postId}/comments")]
    public ActionResult<Comment> CreateComment(int postId, [FromBody]Comment comment)
    {
      // check if the blog exists
      var post = context.Posts.FirstOrDefault(f => f.ID == postId);
      if (post == null)
      {
        return NotFound();
      }
      else
      {
        comment.PostID = postId;
        context.Comments.Add(comment);
        context.SaveChanges();
        return Ok();
      }
    }

    //testing this http request currently
    [HttpPatch("{id}/UpVote")]
    public ActionResult<Post> updateQuestionUpVote(int id)
    {
      var post = context.Posts.FirstOrDefault(q => q.ID == id);
      if (post == null)
      {
        return NotFound();
      }
      else
      {
        post.UpVote += 1;
        context.SaveChanges();
        return post;
      }
    }

    [HttpPatch("{id}/DownVote")]
    public ActionResult<Post> updateQuestionDownVote(int id)
    {
      var post = context.Posts.FirstOrDefault(q => q.ID == id);
      if (post == null)
      {
        return NotFound();
      }
      else
      {
        post.DownVote += 1;
        context.SaveChanges();
        return post;
      }
    }

    //get all questions
    [HttpGet]
    public ActionResult<IEnumerable<Post>> GetAllPosts()
    {
      var posts = context.Posts.OrderByDescending(post => post.TimePassed);
      return posts.ToList();
    }

    //get a question
    [HttpGet("{id}")]
    public ActionResult GetPost(int id)
    {
      var post = context.Posts.FirstOrDefault(o => o.ID == id);
      if (post == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(post);
      }
    }

    //update question
    [HttpPut("{id}")]
    public ActionResult<Post> Update(int id, [FromBody]Post newDetails)
    {
      if (id != newDetails.ID)
      {
        return BadRequest();
      }
      context.Posts.Update(newDetails);
      context.SaveChanges();
      return newDetails;
    }

    // [HttpDelete("{id}")]
    // public ActionResult DeleteBlog(int id)
    // {
    //   var post = context.Posts.FirstOrDefault(f => f.ID == id);
    //   return Ok(new DeleteResponse { Post = post });
    // }

  }
}

