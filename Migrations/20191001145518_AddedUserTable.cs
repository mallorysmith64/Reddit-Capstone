using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserID",
                table: "Posts",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserID",
                table: "Comments",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Email = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    HashedPassword = table.Column<string>(nullable: true),
                    DateSignedUp = table.Column<DateTime>(nullable: false),
                    LastLoggedIn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Posts_UserID",
                table: "Posts",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UserID",
                table: "Comments",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_User_UserID",
                table: "Comments",
                column: "UserID",
                principalTable: "User",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_User_UserID",
                table: "Posts",
                column: "UserID",
                principalTable: "User",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_User_UserID",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Posts_User_UserID",
                table: "Posts");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropIndex(
                name: "IX_Posts_UserID",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Comments_UserID",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "UserID",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "UserID",
                table: "Comments");
        }
    }
}
