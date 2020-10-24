exports.seed = (knex) => {
  const collectible = knex('collectible')
    .del()
    .then(() => {
        return knex('collectible').insert([
            { collectible_id: 1, name: 'test', image_url: 'google.com', attributes: { color: 'green', style: 'cool' }, total_quantity: 445 },
            { collectible_id: 2, name: 'test', image_url: 'google.com', attributes: { color: 'green', style: 'cool' }, total_quantity: 445 },
            { collectible_id: 3, name: 'test', image_url: 'google.com', attributes: { color: 'green', style: 'cool' }, total_quantity: 445 },
        ]);
    });

    const collector = knex('collector')
    .del()
    .then(() => {
        return knex('collector').insert([
            { collector_id: 1, username: 'test1', password: 'Pword123', fullname: 'freddie',
            contact_email: 'test1@gmail.com', phone_number: '1234567'}
            { collector_id: 2, username: 'test2', password: 'Pword125', fullname: 'chika',
            contact_email: 'test1@gmail.com', phone_number: '223231'}
            { collector_id: 3, username: 'test3', password: 'Pword12111', fullname: 'Jester von Elric II',
        contact_email: 'test1@gmail.co.uk', phone_number: '1222-43334567'}
        ]);
    });

    return Promise.all([
        collector,
        // collectible,
    ])
}