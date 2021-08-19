#!/bin/bash

pandoc README.md -o index.html
pandoc regles.md -o regles.html
pandoc test_du_crie_fort.md -o test_du_crie_fort.html
rm ./*.md
