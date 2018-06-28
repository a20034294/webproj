#include <bits/stdc++.h>
#include <time.h>
#include <windows.h>

using namespace std;
FILE *r, *w;
struct player {
    int id, type, x, y, name;
    player(int ID, int TYPE, int X, int Y) : id(ID), type(TYPE), x(X), y(Y) {}
    player() {}
};
player data[1000];
int main() {
    int i = 0;

    int id, type, x, y;
    float angle;
    char c;
    // system("cls");

    r = fopen("in.txt", "r");

    while (~fscanf(r, "%d%d%d%d", &id, &type, &x, &y)) {
        data[i].id = id;
        data[i].type = type;
        data[i].x = x;
        data[i++].y = y;
    }
    fclose(r);

    printf("r %d\n", i);

    while (1) {
        Sleep(100);
        system("cls");

        r = fopen("in.txt", "r");
        int id, type, x, y;

        while (~fscanf(r, "%d %d %d %d", &id, &type, &x, &y)) {
            printf("%d %d %d %d\n", id, type, x, y);
            // cout << "a" << endl;
        }
        fclose(r);
        r = fopen("enemy.txt", "r");
        while (~fscanf(r, "%c %d %d %f", &c, &x, &y, &angle)) {
            if (c == 'b' || c == 'e') {
                printf("%c %d %d %f\n", c, x, y, angle);
            }
        }
        // fclose(w);
        fclose(r);
    }

    return 0;
}