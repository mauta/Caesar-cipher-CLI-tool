# Caesar-cipher-CLI-tool
task for rsschool

# Caesar-cipher-CLI-tool
task for rsschool

__Please be advised that all source code is currently in develop branch!__

### Installation

1. Clone the repository to local machine

2. Open a command line shell and navigate to cloned folder

3. Install all dependencies

  ```npm install```

4. Install CLI tool

  ```npm install -g```

### Usage

To activate a coder, type ```caesar-coder``` and its arguments in command line.

The CLI tool receive following arguments:
 1. ```-a, --action```: type of action, required, should be a string and 'encode' or 'decode' only;
 2. ```-s, --shift```: cipher key, required, should be an integer value, positive or negative;
 3. ```-i, --input```: path to an input file, optional, should be a valid path to an existed .txt file;
 4. ```-o, --output```: path to an output file, optional, should be a valid path to an existed .txt file;

Type ```caesar-coder --help``` in command line to get a list of options.

In case of omitted input argument, a command line will be used for input encoding text. It will receive a text for encode until ```ctrl + C``` is pressed.

In case of omitted output argument, a command line will be used for display an encoded text.

Do not leave an required arguments empty, it will lead to an error!

### Examples

1. Input and outputs files are in root folder:

```caesar-coder -a encode -s 1 -i input.txt -o output.txt```

2. Output file is omitted

```caesar-coder -a encode -s 1 -i input.txt```

3. Input file is omitted

```caesar-coder -a encode -s 1 -o output.txt```

4. Input and output files is omitted

```caesar-coder -a encode -s 1```
