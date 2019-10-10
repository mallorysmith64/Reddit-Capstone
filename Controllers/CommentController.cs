using System.Collections.Generic;
using System.Linq;
using reddit_capstone;
using RedditCapstone.Models;
using Microsoft.AspNetCore.Mvc;

namespace RedditCapstone.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CommentController : ControllerBase
  {
    //dependency injection
    private DatabaseContext context;

    public CommentController(DatabaseContext _context)
    {
      this.context = _context;
    }

    //this does not work yet, error 500 on post request
    //make an answer/comment
    [HttpPost]
    public ActionResult<Comment> CreateEntry([FromBody]Comment entry)
    {
      context.Comments.Add(entry);
      context.SaveChanges();
      return entry;
    }

    //get all answers/comments
    [HttpGet]
    public ActionResult<IEnumerable<Comment>> GetAllComments()
    {
      var comments = context.Comments.OrderByDescending(comment => comment.ID);
      return comments.ToList();
    }

    //get an answer/comment
    [HttpGet("{id}")]
    public ActionResult GetPost(int id)
    {
      var comment = context.Comments.FirstOrDefault(o => o.ID == id);
      if (comment == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(comment);
      }
    }

    //update answer/comment
    [HttpPut("{id}")]
    public ActionResult<Comment> Update(int id, [FromBody]Comment newDetails)
    {
      if (id != newDetails.ID)
      {
        return BadRequest();
      }
      context.Comments.Update(newDetails);
      context.SaveChanges();
      return newDetails;
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteBlog(int id)
    {
      var comment = context.Comments.FirstOrDefault(f => f.ID == id);
      //add response message later within the return
      return Ok();
    }

    // [HttpPost("{postId}/comments")]
    // public ActionResult<Comment> CreateComment(int postId, [FromBody]Comment comment)
    // {
    //   // check if the blog exists
    //   var post = context.Posts.FirstOrDefault(f => f.ID == postId);
    //   if (post == null)
    //   {
    //     return NotFound();
    //   }
    //   else
    //   {
    //     comment.PostID = postId;
    //     context.Comments.Add(comment);
    //     context.SaveChanges();
    //     return Ok();
    //   }
    // }
  }
}

