using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SpaCenter.Services.Spas
{
    //public class AccountRepository : IAccountRepository
    //{
    //    private readonly UserManager<User> userManager;
    //    private readonly SignInManager<User> signInManager;
    //    private readonly IConfiguration configuration;
    //    private readonly SpaDbContext _context;

    //    public AccountRepository(SpaDbContext context)
    //    {
    //        _context = context;
    //    }

    //    public AccountRepository(UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration)
    //    {
    //        this.userManager = userManager;
    //        this.signInManager = signInManager;
    //        this.configuration = configuration;
    //    }

    //    public async Task<string> SignInAsync(SignInItem model)
    //    {
    //        var result = await signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

    //        if (!result.Succeeded)
    //        {
    //            return string.Empty;
    //        }

    //        var authClaims = new List<Claim>
    //        {
    //            new Claim(ClaimTypes.Email, model.UserName),
    //            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
    //        };

    //        var authenKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]));

    //        var token = new JwtSecurityToken(
    //            issuer: configuration["JWT:ValidIssuer"],
    //            audience: configuration["JWT:ValidAudience"],
    //            expires: DateTime.Now.AddMinutes(20),
    //            claims: authClaims,
    //            signingCredentials: new SigningCredentials(authenKey, SecurityAlgorithms.HmacSha512Signature)
    //        );

    //        return new JwtSecurityTokenHandler().WriteToken(token);
    //    }

    //    public async Task<IdentityResult> SignUpAsync(SignUpItem model)
    //    {
    //        var user = new User
    //        {
    //            FullName = model.FullName,
    //            Email = model.Email,
    //            UserName = model.Email
    //        };

    //        return await userManager.CreateAsync(user, model.Password);
    //    }

    //    public async Task<bool> IsUserNameExisted(string username)
    //    {
    //        return await _context.Set<User>().AnyAsync(x => x.UserName == username);
    //    }

    //    public async Task<bool> RemoveUser(int id, CancellationToken cancellationToken = default)
    //    {
    //        var user= await _context.Set<User>().FindAsync(id);
    //        if (user==null)
    //        {
    //            return false;
    //        }
    //        _context.Remove(user);
    //        return await _context.SaveChangesAsync()>0;   
    //    }

    //}
}