User.destroy_all()
Account.destroy_all()
Order.destroy_all()
Item.destroy_all()
Ticket.destroy_all()


user = User.create(username: 'test1', password_digest:"$2a$12$sR3gey8M4RHDpFvqHIdsn.1p3V1mORhyNry99bX2IdS...", company:"the look", phone:'1111', address:'fakestreet 123')

account = Account.create(first_name:'John', last_name:'doe', address:'stuffingtonLn 0000', phone:'0000', user_id: user.id)

ticket = Ticket.create(account_id:account.id, total_cost: 0.0, date:"11/11/1111")

Order.create(item:"shirt", cost: 0.0, description:"white stripped", ticket_id:ticket.id ,date:"11/11/1111")
Order.create(item:"shirt", cost: 0.0, description:"blue stripped", ticket_id:ticket.id ,date:"11/11/1111")


