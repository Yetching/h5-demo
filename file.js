async function saveFile(blob, fileName) {
  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: fileName,
      types: [
        {
          description: 'TXT file',
          accept: {
            'text/plain': ['.txt'],
          },
        },
      ],
    });

    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();

    return handle;
  } catch (e) {
    console.error(e.name, e.message);
  }
}

async function openFile() {
  //数组解构 按顺序赋值
  let [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
