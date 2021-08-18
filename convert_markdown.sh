#!/bin/bash

pandoc regles.md -o index.html
pandoc Test_du_crie_fort.md -o Test_du_crie_fort.html
rm ./*.md
