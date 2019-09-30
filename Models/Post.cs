using System;
using System.Collections.Generic;

namespace StackOverFlow.Models
{
  //table for post
  public class Post
  {
    public int ID { get; set; }
    public int UpVote { get; set; }
    public int DownVote { get; set; }
    public string PostedBy { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime TimePassed { get; set; } = DateTime.Now;
    //link post table to comments: one to many relationship
    public List<Comment> Comments { get; set; } = new List<Comment>();
  }
}