const fs=require('fs');

    const files= fs.readdirSync('./');
    console.log(files);

    asynchronous

    fs.readdir('./',function(err,files)
    {
        if(err) console.log('error',err);
        else
        console.log('result,files')

    });

    fs.readFile('TestFile.txt','utf8',function(err,data)
    {
        if(err) throw err;
    console.log(data);
    });

 
    var data=fs.FileSync('TestFile.txt','utf8');
    console.log(data);

    const data = new Uint8Array(Buffer.from('app.js'));
fs.writeFile('TestFile.txt', data, (err) => {
  if (err) 
  throw err;
  console.log('The file has been saved!');
});fs.writeFile('TestFile.txt', 'app.js', 'utf8', callback);

