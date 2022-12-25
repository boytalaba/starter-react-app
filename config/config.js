const config = {
    app_name: 'Memeshib rarity',
    app_description: 'Memeshib Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0x9e02C26CDBB3040e8CAb59604DEa8B6118EB643e',
    collection_name: 'Memeshib NFTs',
    collection_description: 'Set of 200 unique arts for MEMESHIB NFT collection',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: '',
    item_path_name: 'memeshib',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;