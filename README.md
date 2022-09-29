This was a good exercise overall, took me around one day to finish, but I decided to spend an extra day to care for details which might have evaded, as usually happens when we spend too long fixed on something.

The get_by_amount script took some decision work. First I decided to use reduce() to filter the results, but it was too heavy and a headspace taker, so I simplified for a more conservative forEach for more performant and readable code.

One thing that got me is that the logic was solid and working, but I could not retrieve the correct transactionIDs, even tho the calculation was correct. Turns out I was using the employees names instead of the ID to filter and sum, which was fixed once I noticed that you can have multiple names for the same person.

Also, I try to avoid using libraries unless specific necessity calls for it, but in this case I had to use Axios for the request procedures as it makes the code so much less verbose.

All in all, lots of fun!
